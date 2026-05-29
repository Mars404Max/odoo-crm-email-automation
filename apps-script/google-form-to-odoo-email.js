const CRM_EMAIL = "your-crm-inbox@example.com";
const FORM_ID = "PASTE_GOOGLE_FORM_ID_HERE";

function setupTrigger() {
  const form = FormApp.openById(FORM_ID);

  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function(trigger) {
    if (trigger.getHandlerFunction() === "sendLeadEmail") {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  ScriptApp.newTrigger("sendLeadEmail")
    .forForm(form)
    .onFormSubmit()
    .create();
}

function sendLeadEmail(e) {
  const responses = e.response.getItemResponses();

  let leadData = {};
  let body = "New website consultation request\n\n";

  responses.forEach(function(itemResponse) {
    const question = itemResponse.getItem().getTitle();
    const answer = itemResponse.getResponse();

    leadData[question] = answer;
    body += question + ": " + answer + "\n";
  });

  const name =
    leadData["Name"] ||
    leadData["Full Name"] ||
    leadData["First Name"] ||
    "No name";

  const surname =
    leadData["Surname"] ||
    leadData["Last Name"] ||
    "";

  const company =
    leadData["Company"] ||
    leadData["Company Name"] ||
    "No company";

  const email =
    leadData["Email"] ||
    leadData["E-mail"] ||
    "";

  const subject =
    "Website Lead - " + name + " " + surname + " - " + company;

  body += "\nSource: Google Form / website\n";

  GmailApp.sendEmail(CRM_EMAIL, subject, body, {
    replyTo: email || CRM_EMAIL,
    name: "Website Contact Form"
  });
}
