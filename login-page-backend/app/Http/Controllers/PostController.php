<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class PostController extends Controller
{
    /**
     * Get all posts for a given user
     */
    public function getPosts(Request $req, string $id): string
    {
        $user = User::findOrFail($id);

        if ($req->postIndex) {
            return json_encode($user->postsArray[$req->postIndex]);
        }

        return json_encode($user->postsArray);
    }

    /**
     * Push new post to user's postsArray
     */
    public function newPost(Request $req, string $id) {
        $user = User::findOrFail($id);
        $content = $req->content;
        $newPost = [
            'date' => time(),
            'content' => $content,
        ];
        $postsArray = $user->postsArray;
        array_push($postsArray, $newPost);
        $user->update(['postsArray' => $postsArray]);
        $user->save();
    }

    /**
     * Edit an existing post
     */
    public function editPost(Request $req, string $id) {
        $user = User::findOrFail($id);
        $postsArray = $user->postsArray;
        $postIndex = $req->postIndex;
        $post = $postsArray[$postIndex];
        $updatedPost = [
            'date' => $post['date'],
            'content' => $req->content,
        ];
        $postsArray[$postIndex] = $updatedPost;
        $user->update(['postsArray' => $postsArray]);
        $user->save();
    }

    /**
     * Delete a post
     */
    public function deletePost(Request $req, string $id) {
        $user = User::findOrFail($id);
        $postsArray = $user->postsArray;
        $postIndex = $req->postIndex;
        array_splice($postsArray, $postIndex, 1);
        $user->update(['postsArray' => $postsArray]);
        $user->save();
    }
}
