import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixBaseStoragePath'
})
export class PrefixBaseStoragePathPipe implements PipeTransform {

  transform(value: string): string {
    const fullPath = 'gs://chat-test-f5bf6.appspot.com/'  + value;
    console.log('added base', fullPath);
    return fullPath;
  }

}
