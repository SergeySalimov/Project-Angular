import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger('fade', [
  transition('void => *', [
    style({
      opacity: 0,
    }),
    animate(700, style({
      opacity: 0.8,
    }))
  ]),
  transition('* => void', [
    animate(700, style({
      opacity: 0,
    }))
  ])
]);
