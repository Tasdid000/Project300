# Generated by Django 4.0.4 on 2022-06-17 15:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0011_alter_portfolio_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='TimeStamp',
            field=models.DateField(default=datetime.datetime.today),
        ),
    ]
