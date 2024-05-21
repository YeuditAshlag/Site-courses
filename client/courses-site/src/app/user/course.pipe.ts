
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'learningTypeIcon', standalone:true })

export class LearningTypeIconPipe implements PipeTransform {
    transform(value: number|undefined): string {
        return value === 1 ? 'chair' : 'computer';
    }
}