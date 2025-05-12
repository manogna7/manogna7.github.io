import { startBlobs } from "./meta";

const maxPointDistance = 0.25;

function randomisePoint(point) {
  const distance = Math.random() * maxPointDistance;
  const angle = Math.random() * Math.PI * 2;
  const xShift = Math.sin(angle) * distance;
  const yShift = Math.cos(angle) * distance;
  return point.map((val, i) => val + (i % 2 === 0 ? xShift : yShift));
}

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function easeInExpo(x) {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
}

const rand = (min, max) => Math.random() * (max - min) + min;

const sevenPointCircle = [
  [-0.304, -1, 0, -1, 0.304, -1],
  [0.592, -0.861, 0.782, -0.623, 0.972, -0.386],
  [1.043, -0.074, 0.975, 0.223, 0.907, 0.519],
  [0.708, 0.769, 0.434, 0.901, 0.16, 1.033],
  [-0.16, 1.033, -0.434, 0.901, -0.708, 0.769],
  [-0.907, 0.519, -0.975, 0.223, -1.043, -0.074],
  [-0.972, -0.386, -0.782, -0.623, -0.592, -0.861],
];

class CircleBlob {
  constructor(basePoints, options = {}) {
    const {
      startPoints = basePoints.map(randomisePoint),
      minDuration = 5000,
      maxDuration = 10000,
    } = options;

    this.points = startPoints;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
    this.animStates = basePoints.map((basePoint, i) => ({
      basePoint,
      pos: 0,
      duration: rand(minDuration, maxDuration),
      startPoint: startPoints[i],
      endPoint: randomisePoint(basePoint),
    }));
  }

  advance(timeDelta) {
    this.points = this.animStates.map((state) => {
      state.pos += timeDelta / state.duration;
      if (state.pos >= 1) {
        state.startPoint = state.endPoint;
        state.pos = 0;
        state.duration = rand(this.minDuration, this.maxDuration);
        state.endPoint = randomisePoint(state.basePoint);
      }

      const eased = easeInOutQuad(state.pos);
      return state.startPoint.map(
        (startVal, i) => (state.endPoint[i] - startVal) * eased + startVal,
      );
    });
  }

  draw(ctx) {
    const points = this.points;
    ctx.beginPath();
    ctx.moveTo(points[0][2], points[0][3]);

    for (let i = 0; i < points.length; i++) {
      const nextI = (i + 1) % points.length;
      ctx.bezierCurveTo(
        points[i][4],
        points[i][5],
        points[nextI][0],
        points[nextI][1],
        points[nextI][2],
        points[nextI][3],
      );
    }

    ctx.closePath();
    ctx.fill();
  }
}

class CentralBlobs {
  constructor() {
    this.rotatePos = 0;
    this.blobs = Array.from(
      { length: 4 },
      (_, i) =>
        new CircleBlob(sevenPointCircle, { startPoints: startBlobs[i] }),
    );
  }

  advance(delta) {
    this.rotatePos = (this.rotatePos + delta / 120000) % 1;
    this.blobs.forEach((blob) => blob.advance(delta));
  }

  draw(ctx, x, y, radius) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(radius, radius);
    ctx.rotate(Math.PI * 2 * this.rotatePos);
    this.blobs.forEach((blob) => blob.draw(ctx));
    ctx.restore();
  }
}

class BackgroundBlobs {
  constructor(bounds) {
    const count = Math.round(bounds.width * bounds.height * 0.000025);
    this.bgBlobs = Array.from({ length: count }, () => {
      const radiusPos = easeInExpo(Math.random());
      return {
        blob: new CircleBlob(sevenPointCircle, {
          minDuration: 2000,
          maxDuration: 5000,
        }),
        velocity: (1 - radiusPos) * (0.007 - 0.0015) + 0.0015,
        alpha: Math.random() ** 3 * (0.8 - 0.2) + 0.2,
        alphaMultiplier: 1,
        spinTime: rand(20000, 60000),
        rotatePos: 0,
        radius: radiusPos * (60 - 7) + 7,
        x: Math.random() * bounds.width,
        y: Math.random() * bounds.height,
      };
    });
    this.overallAlphaPos = 0;
  }

  advance(delta, bounds, targetX, targetY, targetRadius) {
    this.overallAlphaPos = Math.min(1, this.overallAlphaPos + delta / 2000);
    this.bgBlobs.forEach((blob) => {
      blob.blob.advance(delta);
      blob.rotatePos = (blob.rotatePos + delta / blob.spinTime) % 1;

      let dist = Math.hypot(blob.x - targetX, blob.y - targetY);
      if (dist < 10) {
        const side = Math.floor(Math.random() * 4);
        if (side === 0) {
          blob.x = Math.random() * bounds.width;
          blob.y = -blob.radius;
        } else if (side === 1) {
          blob.x = -blob.radius;
          blob.y = Math.random() * bounds.height;
        } else if (side === 2) {
          blob.x = Math.random() * bounds.width;
          blob.y = bounds.height + blob.radius;
        } else {
          blob.x = bounds.width + blob.radius;
          blob.y = Math.random() * bounds.height;
        }
      }

      dist = Math.hypot(blob.x - targetX, blob.y - targetY);
      const velocity =
        dist > 300
          ? blob.velocity
          : ((1 - dist / 300) * (15 - 1) + 1) * blob.velocity;
      const shift = velocity * delta;
      const angle = Math.atan2(targetX - blob.x, targetY - blob.y);
      blob.x += Math.sin(angle) * shift;
      blob.y += Math.cos(angle) * shift;
      blob.alphaMultiplier = Math.min(dist / targetRadius, 1);
    });
  }

  draw(ctx) {
    const alpha = easeInOutQuad(this.overallAlphaPos);
    this.bgBlobs.forEach((blob) => {
      ctx.save();
      ctx.globalAlpha = blob.alpha * blob.alphaMultiplier * alpha;
      ctx.translate(blob.x, blob.y);
      ctx.scale(blob.radius, blob.radius);
      ctx.rotate(Math.PI * 2 * blob.rotatePos);
      blob.blob.draw(ctx);
      ctx.restore();
    });
  }
}

export function startBlobAnim(canvas) {
  const ctx = canvas.getContext("2d");
  const centralBlobs = new CentralBlobs();
  let backgroundBlobs;
  const loadImgEl = document.querySelector(".load-img");

  let hasFocus = document.hasFocus();
  let deltaMultiplier = hasFocus ? 1 : 0;
  let animating = true;
  let lastTime;

  const resizeObserver = new ResizeObserver(() => {
    if (!animating) {
      requestAnimationFrame(() => drawFrame(0));
    }
  });
  resizeObserver.observe(canvas);

  function drawFrame(delta) {
    const bounds = canvas.getBoundingClientRect();
    canvas.width = bounds.width * devicePixelRatio;
    canvas.height = bounds.height * devicePixelRatio;
    const loadBounds = loadImgEl.getBoundingClientRect();
    const styles = getComputedStyle(canvas);
    const color = styles.getPropertyValue("--blob-color").trim();
    const centerX = loadBounds.left - bounds.left + loadBounds.width / 2;
    const centerY = loadBounds.top - bounds.top + loadBounds.height / 2 + 160; // or 60 for more shift

    const radius = loadBounds.height / 2 / (1 + maxPointDistance);

    ctx.scale(devicePixelRatio, devicePixelRatio);

    if (!backgroundBlobs) backgroundBlobs = new BackgroundBlobs(bounds);
    backgroundBlobs.advance(delta, bounds, centerX, centerY, radius);
    centralBlobs.advance(delta);

    ctx.globalAlpha = Number(styles.getPropertyValue("--center-blob-opacity"));
    ctx.fillStyle = color;

    backgroundBlobs.draw(ctx);
    centralBlobs.draw(ctx, centerX, centerY, radius);
  }

  function frame(time) {
    if (!canvas.isConnected) return;
    if (!hasFocus) {
      deltaMultiplier = Math.max(0, deltaMultiplier - 0.01);
      if (deltaMultiplier === 0) {
        animating = false;
        return;
      }
    } else {
      deltaMultiplier = Math.min(1, deltaMultiplier + 0.01);
    }

    const delta = (time - lastTime) * deltaMultiplier;
    lastTime = time;

    drawFrame(delta);
    requestAnimationFrame(frame);
  }

  function start() {
    animating = true;
    requestAnimationFrame((time) => {
      lastTime = time;
      frame(time);
    });
  }

  window.addEventListener("focus", () => {
    hasFocus = true;
    if (!animating) start();
  });

  window.addEventListener("blur", () => {
    hasFocus = false;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") lastTime = performance.now();
  });

  start();
}
