function getWindow(): any {
  return window;
}

export class SkyAppWindowRef {
  public get nativeWindow(): any {
    return getWindow();
  }
}
