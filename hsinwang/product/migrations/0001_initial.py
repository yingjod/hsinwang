# Generated by Django 5.1.2 on 2024-10-18 10:33

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Size",
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
                ("name", models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name="Cake",
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
                ("description", models.TextField(blank=True)),
                ("image", models.ImageField(blank=True, null=True, upload_to="cakes/")),
                (
                    "price_4",
                    models.DecimalField(decimal_places=2, default=680, max_digits=10),
                ),
                (
                    "price_6",
                    models.DecimalField(decimal_places=2, default=1180, max_digits=10),
                ),
                (
                    "price_8",
                    models.DecimalField(decimal_places=2, default=1680, max_digits=10),
                ),
                (
                    "price_46",
                    models.DecimalField(decimal_places=2, default=1980, max_digits=10),
                ),
                (
                    "price_68",
                    models.DecimalField(decimal_places=2, default=2980, max_digits=10),
                ),
                ("sizes", models.ManyToManyField(to="product.size")),
            ],
        ),
    ]
