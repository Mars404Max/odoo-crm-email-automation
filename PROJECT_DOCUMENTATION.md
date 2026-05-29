# Odoo CRM Email Automation with AI Lead Assistance

## 1. Project Overview

This project implements an automated lead generation workflow for a self-hosted Odoo CRM system.

The system connects a public website contact form with Odoo CRM. Website visitors submit a consultation request through a Google Form embedded on the company website. A Google Apps Script processes the form submission and sends a structured email to a dedicated Gmail inbox. Odoo retrieves the email through an Incoming Mail Server and automatically creates a CRM lead.

In addition, an AI-based lead assistant is part of the project. The AI component is designed to support lead processing by analyzing incoming lead information and preparing structured CRM-relevant output for the sales process.

## 2. Business Goal

The goal of the project is to reduce manual lead handling and create a repeatable digital process for customer inquiries.

Before the implementation, customer requests had to be handled manually. With this workflow, leads from the website can be captured, transferred and stored in Odoo CRM automatically.

## 3. Implemented Workflow

```text
Google Sites Website
→ Embedded Google Form
→ Google Apps Script
→ Structured Gmail Notification
→ Odoo Incoming Mail Server
→ Odoo CRM Lead
→ AI Lead Assistance

4. Main Components

Google Sites

The public website is hosted with Google Sites under the company domain.

The website contains an embedded contact form for consultation requests.

Google Forms

Google Forms is used to collect website visitor input.

Typical fields include:

Name
Surname
Email
Phone
Address
Company
ERP system
Interest
Message
Datenschutz confirmation

Google Apps Script

Google Apps Script is used to transform the default Google Forms response into a structured CRM email.

The default Google Forms notification was not sufficient because it did not include all customer data directly inside the email body. Therefore, a custom script was implemented.

The script sends an email in a structured format such as:

New website consultation request

Name: Maria
Surname: Schulz
Email: maria@example.com
Phone number: +49 ...
Company: Example GmbH
ERP System: Odoo
Interest: CRM
Message: I would like to request a consultation.

Source: Google Form / website

Gmail CRM Inbox

A dedicated Gmail inbox receives the structured lead emails.

This mailbox is used only as an integration channel between the website form and Odoo CRM.

Odoo Incoming Mail Server

Odoo is configured to fetch emails from the CRM mailbox.

When a new structured lead email is received, Odoo creates a CRM lead automatically.

Odoo CRM

Odoo CRM stores the generated leads in the sales pipeline.

The created lead contains the form data in the communication history, making the customer request visible for the sales team.

AI Lead Assistant

An AI component is included in the project to support lead handling.

The AI assistant can be used to analyze lead content, prepare structured CRM information and support the sales manager with lead understanding.

The AI part is not a future idea only. It is part of the overall automation concept and belongs to the implemented business process.

5. Technical Architecture

User submits form
        ↓
Google Form receives response
        ↓
Apps Script trigger runs on form submit
        ↓
Structured email is generated
        ↓
Email is sent to CRM Gmail inbox
        ↓
Odoo Incoming Mail Server fetches email
        ↓
CRM lead is created
        ↓
AI assistant supports lead processing

6. Infrastructure

The CRM system is hosted on an Ubuntu server in Oracle Cloud Infrastructure.

Main infrastructure elements:

Oracle Cloud Infrastructure
Ubuntu Server
Nginx Reverse Proxy
Odoo CRM
PostgreSQL
UFW Firewall
Let's Encrypt SSL Certificate

7. Domain Setup

The domain setup separates the public website from the CRM system.

c-institute.com → Google Sites website
crm.c-institute.com → Odoo CRM on Oracle Cloud

The CRM subdomain points to the Oracle Cloud server.

8. HTTPS and SSL

The CRM system is secured with HTTPS.

An earlier wildcard certificate caused browser warnings because it was revoked. The issue was solved by installing a new Let's Encrypt certificate for:

crm.c-institute.com

Certbot was used with Nginx:

sudo certbot --nginx -d crm.c-institute.com

After installation, the CRM was available again through a valid HTTPS connection.

9. Firewall and SSH Hardening

UFW was enabled on the Ubuntu server.

SSH access was restricted to the administrator's public IPv4 address.

Final firewall concept:

22/tcp allowed only from administrator IP
80/tcp allowed publicly
443/tcp allowed publicly

This improves server security by preventing public SSH access from unknown IP addresses.

10. Repository Structure

odoo-crm-email-automation/
├── README.md
├── PROJECT_DOCUMENTATION.md
├── apps-script/
│ └── google-form-to-odoo-email.js
├── examples/
│ └── sample-lead-email.txt
├── .gitignore
└── docs/

11. Security Notice

This repository must not contain production secrets.

The following data must never be committed:

SSH private keys
Gmail app passwords
Odoo admin passwords
Odoo database passwords
API keys
.env files
private certificates

Only placeholder values are used in the public code examples.

12. Current Status

Implemented:

Odoo CRM is deployed
CRM subdomain is configured
HTTPS is working
Google Form is embedded on the website
Apps Script sends structured lead emails
Gmail receives website leads
Odoo creates CRM leads automatically
AI lead assistance is part of the workflow
UFW firewall is enabled
SSH is restricted by IP
Project repository is published on GitHub

13. Possible Next Improvements

Future improvements may include:

Direct Odoo API integration
Automatic mapping into Odoo lead fields
Fail2ban setup
Automated backup restore test
Ubuntu LTS upgrade
Monitoring and alerting

The current solution already works as an automated website-to-CRM lead generation workflow with AI support.

14. Summary

This project demonstrates a practical business automation workflow.

A customer request submitted through a website form is automatically transferred into Odoo CRM. The process reduces manual work, improves lead visibility and creates a structured foundation for sales and digital transformation.

The project combines CRM configuration, server administration, email automation, web form processing, AI-assisted lead handling and security hardening.
