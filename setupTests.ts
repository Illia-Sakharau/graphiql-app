import "@testing-library/jest-dom";
import 'intersection-observer';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';


// expect.extend(matchers);

afterEach(() => {
  cleanup();
});
