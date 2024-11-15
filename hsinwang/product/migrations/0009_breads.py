# Generated by Django 5.1.3 on 2024-11-15 15:04

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("product", "0008_rename_size_sizes"),
    ]

    operations = [
        migrations.CreateModel(
            name="Breads",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("description", models.TextField()),
                ("image", models.ImageField(blank=True, null=True, upload_to="cakes/")),
            ],
        ),
    ]