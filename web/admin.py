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

    def delete_queryset(self, request, queryset):
        for image in queryset:
            # Delete the image file from the media directory
            if image.image:
                image_path = image.image.path
                if os.path.exists(image_path):
                    os.remove(image_path)
        
        # Call the superclass method to delete the objects from the database
        super().delete_queryset(request, queryset)

admin.site.register(Image, ImageAdmin)