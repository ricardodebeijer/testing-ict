import { PrefixBaseStoragePathPipe } from './prefix-base-storage-path.pipe';

describe('PrefixBaseStoragePathPipe', () => {
  it('create an instance', () => {
    const pipe = new PrefixBaseStoragePathPipe();
    expect(pipe).toBeTruthy();
  });
});
