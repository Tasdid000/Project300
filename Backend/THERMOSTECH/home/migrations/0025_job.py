# Generated by Django 4.0.4 on 2022-06-19 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0024_rename_contant_post_content'),
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('content', models.TextField(max_length=255)),
                ('subject', models.CharField(max_length=255)),
                ('Requirements', models.CharField(max_length=2550152)),
            ],
        ),
    ]
