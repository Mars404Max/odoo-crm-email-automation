# Odoo CRM Email Automation

Automated website lead generation workflow with Google Forms, Gmail, Odoo CRM and AI lead assistance.

## Project Overview

This project connects a public website contact form with a self-hosted Odoo CRM system.

The workflow automatically creates CRM leads from website form submissions and includes an AI-based lead assistant for lead processing support.

## Workflow

```text
Google Sites Website
→ Google Form
→ Google Apps Script
→ Structured Gmail Notification
→ Odoo Incoming Mail Server
→ Odoo CRM Lead
→ AI Lead Assistance

Main Features

Self-hosted Odoo CRM on Oracle Cloud Infrastructure

CRM subdomain connected to the Odoo server

Google Form embedded into the public website

Google Apps Script for structured lead email generation

Dedicated Gmail inbox as CRM lead channel

Odoo Incoming Mail Server creates CRM leads automatically

AI lead assistant included in the lead workflow

HTTPS secured with Let's Encrypt

SSH access restricted by IP using UFW

Backup concept for Odoo database and filestore


Technologies Used

Odoo CRM

Oracle Cloud Infrastructure

Ubuntu Server

Nginx

PostgreSQL

Google Sites

Google Forms

Google Apps Script

Gmail

Let's Encrypt / Certbot

UFW Firewall

AI lead assistant logic

Bash

Git / GitHub


Repository Structure

apps-script/
  Google Apps Script for sending structured lead emails

examples/
  Example lead email and configuration examples

PROJECT_DOCUMENTATION.md
  Full project documentation

README.md
  Project overview

Security Notice

This repository does not contain real passwords, API keys, SSH private keys, Gmail app passwords or production credentials.

All sensitive values are replaced with placeholders.

Current Status

The implemented workflow successfully creates Odoo CRM leads from website form submissions.

The AI lead assistant is part of the project concept and supports the automated lead handling process.

Documentation

See:

PROJECT_DOCUMENTATION.md

Future Improvements

Direct Odoo API integration

Automatic mapping into Odoo CRM fields

Fail2ban setup

Automated restore test

Ubuntu LTS upgrade

Monitoring and alerting
