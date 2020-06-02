import { EventSubtype, EventType } from '../utils/types';
import { Condition } from './condition.model';
import { Option } from './option.model';

export interface Event {
    type: EventType;
    child?: string;
    value?: string;
    from?: string;
    to?: string;
    timestamp?: string;
    condition?: Condition[];
    subtype?: EventSubtype;
    options?: Option[];
    parameter?: string;
    skipText?: boolean;
    emoji?: string;
    color?: string;
    message?: string;
    goodEnd?: boolean;
}
