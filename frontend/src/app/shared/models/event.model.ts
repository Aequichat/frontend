import { EventSubtype, EventType } from '../utils/types';
import { Condition } from './condition.model';
import { Option } from './option.model';

export interface Event {
    type: EventType;
    child: string;
    value?: string;
    from?: string;
    to?: string;
    timestamp?: Date;
    condition?: Condition[];
    subtype?: EventSubtype;
    options?: Option[];
}
