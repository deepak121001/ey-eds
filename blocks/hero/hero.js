export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('hero-content');

  const heading = block.querySelector('h2');
  const paragraphs = block.querySelectorAll('p');
  // Move the h2 into the wrapper if it exists
  if (heading) {
    wrapper.appendChild(heading);
  }

  // Move all p elements into the wrapper
  paragraphs.forEach((p) => wrapper.appendChild(p));

  block.appendChild(wrapper);
}
