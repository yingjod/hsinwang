# Generated by Django 5.1.2 on 2024-10-25 13:59

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("QA", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="questions",
            old_name="question",
            new_name="name",
        ),
    ]
