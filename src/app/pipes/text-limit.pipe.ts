import {Pipe} from '@angular/core';

@Pipe({
  name: 'textLimit'
})
export class TextLimitPipe {
  transform(value: string, args: string[]) : string {
    let limit = args.length > 0 ? parseInt(args[0], 65) : 65;
    let trail = args.length > 1 ? args[1] : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
