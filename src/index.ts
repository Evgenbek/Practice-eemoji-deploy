/* eslint-disable no-restricted-syntax */
import './index.css';

const emojis = Array.from(
  document.querySelectorAll<HTMLImageElement>('.emoji'),
);
const WrapperEmojis = document.querySelector<HTMLDivElement>('.wrapper-emojis');
for (const emoji of emojis) {
  emoji.style.top = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;
  emoji.style.left = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;
}
let emojiTarget: '' | HTMLImageElement = '';
if (WrapperEmojis) {
  WrapperEmojis.addEventListener('mouseover', (event: MouseEvent) => {
    const { target } = event;
    if (target instanceof HTMLImageElement && target) {
      if (
        emojiTarget
        && emojiTarget.src === target.src
        && emojiTarget !== target
      ) {
        target.classList.add('hidden');
        emojiTarget.classList.add('hidden');
      }
      emojiTarget = target;
    }
  });
}
