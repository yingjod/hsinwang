# Generated by Django 5.1.3 on 2024-11-15 15:46

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("product", "0009_breads"),
    ]

    operations = [
        migrations.AlterField(
            model_name="breads",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="breads/"),
        ),
    ]
