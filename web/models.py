import os
from django.db import models

# Create your models here.
class Image(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to='gallery')

    def delete(self, *args, **kwargs):
        # Delete the image file from the media directory
        if self.image:
            # Get the path to the image file
            image_path = self.image.path
            # Delete the file if it exists
            if os.path.exists(image_path):
                os.remove(image_path)
        
        # Call the superclass method to delete the object from the database
        super().delete(*args, **kwargs)
