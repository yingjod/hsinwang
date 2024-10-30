# Generated by Django 5.1.2 on 2024-10-27 18:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("product", "0004_acc"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="cake",
            name="base",
        ),
        migrations.RemoveField(
            model_name="cake",
            name="filling",
        ),
        migrations.RemoveField(
            model_name="cake",
            name="price_4",
        ),
        migrations.RemoveField(
            model_name="cake",
            name="price_46",
        ),
        migrations.RemoveField(
            model_name="cake",
            name="price_6",
        ),
        migrations.RemoveField(
            model_name="cake",
            name="price_68",
        ),
        migrations.RemoveField(
            model_name="cake",
            name="price_8",
        ),
        migrations.RemoveField(
            model_name="cake",
            name="sizes",
        ),
        migrations.RemoveField(
            model_name="cakebase",
            name="name",
        ),
        migrations.RemoveField(
            model_name="cakebase",
            name="price",
        ),
        migrations.RemoveField(
            model_name="filling",
            name="additional_price",
        ),
        migrations.RemoveField(
            model_name="filling",
            name="name",
        ),
        migrations.RemoveField(
            model_name="size",
            name="name",
        ),
        migrations.AddField(
            model_name="cakebase",
            name="cake",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="cakeBase",
                to="product.cake",
            ),
        ),
        migrations.AddField(
            model_name="cakebase",
            name="cakebase_name",
            field=models.CharField(default="Default Name", max_length=255),
        ),
        migrations.AddField(
            model_name="cakebase",
            name="extra_price",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name="filling",
            name="cake",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="fillings",
                to="product.cake",
            ),
        ),
        migrations.AddField(
            model_name="filling",
            name="extra_price",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name="filling",
            name="filling_name",
            field=models.CharField(default="Default Filling", max_length=255),
        ),
        migrations.AddField(
            model_name="size",
            name="cake",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="sizes",
                to="product.cake",
            ),
        ),
        migrations.AddField(
            model_name="size",
            name="price",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name="size",
            name="size",
            field=models.CharField(default="Default Filling", max_length=50),
        ),
    ]
