export enum wayOfLearn{
    zoom=0,frontal=1
};



export class Course{
    codeCourse?:number;
    namecourse?:string;
    categoryId?:number;
    accountLessons?:number;
    dateStart!:string;
    syllabus?:string[];
    wayOfLearning?:wayOfLearn |undefined;
    lecturerId?:number;
    imageUrl?:string;
    constructor(){
        this.codeCourse=-1;
    }
}