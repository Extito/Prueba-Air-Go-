from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Post
import json
from django.shortcuts import get_object_or_404

@csrf_exempt
def create_post(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            post = Post.objects.create(
                title=data.get('title'),
                content=data.get('content')
            )
            return JsonResponse({
                'id': post.id,
                'title': post.title,
                'content': post.content
            }, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

def list_posts(request):
    posts = Post.objects.all().values('id', 'title', 'content')
    return JsonResponse(list(posts), safe=False)

@csrf_exempt
def update_post(request, post_id):
    if request.method == 'PUT':
        try:
            post = get_object_or_404(Post, id=post_id)
            data = json.loads(request.body)
            post.title = data.get('title', post.title)
            post.content = data.get('content', post.content)
            post.save()
            return JsonResponse({
                'id': post.id,
                'title': post.title,
                'content': post.content
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

            
@csrf_exempt
def delete_post(request, post_id):
    if request.method == 'DELETE':
        try:
            post = get_object_or_404(Post, id=post_id)
            post.delete()
            return JsonResponse({'message': 'Post deleted successfully'}, status=204)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
