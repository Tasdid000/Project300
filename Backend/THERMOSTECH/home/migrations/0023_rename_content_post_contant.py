# Generated by Django 4.0.4 on 2022-06-19 04:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0022_rename_contant_post_content'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='content',
            new_name='contant',
        ),
    ]
