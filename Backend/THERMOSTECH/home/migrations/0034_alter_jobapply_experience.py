# Generated by Django 4.0.4 on 2022-06-22 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0033_rename_myfile_jobapply_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobapply',
            name='Experience',
            field=models.TextField(max_length=12122),
        ),
    ]
