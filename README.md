# Odoo CRM Email Automation

Automated website lead generation workflow with Google Forms, Apps Script, Gmail and Odoo CRM.

## Project Overview

This project connects a website contact form with a self-hosted Odoo CRM system.

Workflow:

````text
Google Sites Website
-> Google Form
-> Google Apps Script
-> Structured Gmail Notification
-> Odoo Incoming Mail Server
-> CRM Lead / Opportunity

Main Features
Self-hosted Odoo CRM on Oracle Cloud Infrastructure
CRM subdomain: crm.c-institute.com
Google Form embedded into Google Sites
Google Apps Script for structured lead email generation
Gmail mailbox used as CRM lead inbox
Odoo Incoming Mail Server creates CRM leads automatically
HTTPS secured with Let's Encrypt
SSH access restricted by IP using UFW
Backup concept for Odoo database and filestore
Technologies Used
Odoo CRM
Oracle Cloud Infrastructure
Ubuntu Server
Nginx
Let's Encrypt / Certbot
Google Forms
Google Apps Script
Gmail
UFW Firewall
PostgreSQL
Bash
Documentation
Project documentation can be placed in:

docs/IHK_Dokumentation_Odoo_CRM_Integration.pdf
Security Notice
This repository does not contain passwords, API keys, SSH private keys, Gmail app passwords or production credentials.
Sensitive values must be stored outside the repository.
Current Status
The implemented workflow successfully creates Odoo CRM leads from website form submissions.
Future Improvements
Direct Odoo API integration
Automatic field mapping into Odoo CRM fields
Fail2ban setup
Automated restore test
Ubuntu LTS upgrade
Monitoring and alerting EOF
