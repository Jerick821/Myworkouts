import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx'; //reactive extensions

@Injectable() //decorator
export class WorkoutService{
    http:any;
    apiKey:String;
    workoutsUrl: String;

    constructor(http:Http){
        this.http = http;
        this.apiKey = 'UAs1cHk1baeNlOLRSjl2zfuqhCf4TrHl';   
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkouts_app/collections/workouts';
    }

    getWorkouts(){
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    addWorkout(workout){
        var headers = new Headers(); //var headers because we are making a post request
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers: headers})
            .map(res => res.json());
    }

    deleteWorkout(workoutId){
        return this.http.delete(this.workoutsUrl+'/'+workoutId+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }
}





