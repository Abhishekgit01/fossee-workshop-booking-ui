#!/usr/bin/env python
import os
import sys
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'workshop_portal.settings')
sys.path.insert(0, '/Abhi/Projects/FOSSEE/workshop_booking')

django.setup()

from django.core.management import call_command

print("Creating cms migrations...")
call_command('makemigrations', 'cms', verbosity=2)

print("\nApplying cms migrations...")
call_command('migrate', 'cms', verbosity=2)

print("\nDone!")
