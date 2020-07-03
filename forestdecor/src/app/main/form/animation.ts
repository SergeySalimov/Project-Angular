import { animate, style, transition, trigger } from '@angular/animations';

const FLIP = [
  style({
    transform: 'rotateY(0deg)'}),
  animate(200, style({
    transform: 'rotateY(90deg)',
  })),
  animate(200, style({
    transform: '*',
  })),];

export const forRecovery = trigger('onRecoveryClick', [
  transition('notRecovery <=> recovery', FLIP),
  transition('start => *', FLIP)
]);

