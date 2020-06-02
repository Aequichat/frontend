import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Util class that destroys all {@link takeUntil()} observers in the OnDestroy cycle.
 *
 * @date 2018-11-04
 * @export
 */
export class Subscribable implements OnDestroy {

  /**
   * {@link Subject} that emits a value and completes when the component is going to be destroyeded.
   *
   */
  public destroyed = new Subject();

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
