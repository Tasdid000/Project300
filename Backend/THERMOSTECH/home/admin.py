from django.contrib import admin
from .models import Contact, Portfolio, Post
# Register your models here.
class Contactadmin(admin.ModelAdmin):
    list_display= ['name', 'Email', "Phone"]

class Meta:
   model = Contact


admin.site.register(Contact, Contactadmin)

@admin.register(Portfolio)
class Portfolioadmin(admin.ModelAdmin):
    class Media: 
        js = ('tiny.js',)

@admin.register(Post)
class Postadmin(admin.ModelAdmin):
    class Media:
        js = ('tiny.js',)