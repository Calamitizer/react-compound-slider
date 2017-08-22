export function updateValues(active, pct, knobs, scale, [min, max]) {
  const index = knobs.findIndex(v => v.key === active);

  if (index !== -1) {
    const { key, val } = knobs[index];
    const nxt = scale(val + (max - min) * pct);

    if (val !== nxt) {
      return [
        ...knobs.slice(0, index),
        { key, val: nxt },
        ...knobs.slice(index + 1)
      ];
    }
  }

  return knobs;
}

function precision(num) {
  const m = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

  if (!m) {
    return 0;
  }

  return Math.max(0, (m[1] ? m[1].length : 0) - (m[2] ? +m[2] : 0));
}

export function getStepRange(min, max, step) {
  const fixed = precision(step);
  const range = [];

  let next = min;

  while (next <= max) {
    range.push(+next.toFixed(fixed));
    next += step;
  }

  return range;
}

export function getSliderLength(slider, vertical) {
  if (!slider) {
    return 0;
  }

  const rect = slider.getBoundingClientRect();
  return vertical ? rect.height : rect.width;
}
