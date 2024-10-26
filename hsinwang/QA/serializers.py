# QA/serializers.py
from rest_framework import serializers
from .models import questions

class QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = questions
        fields = '__all__'  # Use all fields or specify them as a list ['id', 'name', ...]
