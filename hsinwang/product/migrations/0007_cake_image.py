# Generated by Django 5.1.2 on 2024-10-28 12:54

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("product", "0006_base_remove_cake_image_remove_filling_cake_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="cake",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="cakes/"),
        ),
    ]