from django.contrib import admin
from .models import Member

# Register your models here.
@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'phone', 'membership_type', 'joined_on')
    search_fields = ('name', 'email', 'phone')
    list_filter = ('membership_type', 'joined_on')