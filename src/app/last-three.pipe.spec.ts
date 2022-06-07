import { LastThreePipe } from './last-three.pipe';

describe('LastThreePipe', () => {
  it('create an instance', () => {
    const pipe = new LastThreePipe();
    expect(pipe).toBeTruthy();
  });
});
