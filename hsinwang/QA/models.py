from django.db import models

class questions(models.Model):
    name = models.CharField(max_length=100)
    answer = models.CharField(max_length=200)

    def __str__(self):
        return self.name