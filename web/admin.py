from django.contrib import admin
from .models import Image
import os

# Register your models here.
class ImageAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'image_file_name')
    list_display = ('id', 'name', 'image_file_name')

    def image_file_name(self, obj):
        return os.path.basename(obj.image.name)
    image_file_name.short_description = 'Image File Name'

admin.site.register(Image, ImageAdmin)
