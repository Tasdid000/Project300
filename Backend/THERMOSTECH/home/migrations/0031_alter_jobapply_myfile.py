# Generated by Django 4.0.4 on 2022-06-22 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0030_jobapply'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobapply',
            name='myfile',
            field=models.FileField(upload_to='home/images'),
        ),
    ]