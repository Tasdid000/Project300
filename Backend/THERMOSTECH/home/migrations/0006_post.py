# Generated by Django 4.0.4 on 2022-05-20 04:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_portfolio'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('content', models.TextField()),
                ('athour', models.CharField(max_length=13)),
                ('slug', models.CharField(max_length=130)),
                ('TimeStamp', models.DateTimeField(blank=True)),
            ],
        ),
    ]
