from django.db import models

class Contact (models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    Email = models.CharField(max_length=200)
    Website=models.CharField(max_length=10000)
    Phone=models.CharField(max_length=50)
    message=models.TextField()
    Timestamp=models.DateTimeField(auto_now_add=True, blank=True)


    def __str__(self):
        return 'Messages from ' + self.name + ' - ' + self.Email 

class Meta:
    verbose_name_plural = 'Contact Us'


class Portfolio (models.Model):
    id = models.AutoField(primary_key=True, blank=True)
    title = models.CharField(max_length=255)
    content = models.TextField()
    slug = models.CharField(max_length=130)
    TimeStamp = models.DateTimeField(blank=True)

    def __str__(self):
        return self.title + ' by ' + self.content[0:30]

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    content = models.TextField()
    athour = models.CharField(max_length=13)
    slug = models.CharField(max_length=130)
    TimeStamp = models.DateTimeField(blank=True)

    def __str__(self):
        return self.title + ' by ' + self.athour
