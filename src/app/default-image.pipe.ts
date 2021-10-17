import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'defaultImage' })
export class DefaultImage implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value ? value : args[0];
  }

}
