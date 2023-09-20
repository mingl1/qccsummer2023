from django.shortcuts import render
from .models import Todolist
# Create your views here.
def index(request):
    todo_items = Todolist.objects.order_by('id')
    context = {'todo_items':todo_items}
    if request.method=='POST':
        # print(request.POST)
        if request.POST.get('del')=='del_completed':
            Todolist.objects.all().filter(completed=True).delete()
        else:
            Todolist.objects.all().delete()
    
    return render(request, 'dolist/index.html',context)