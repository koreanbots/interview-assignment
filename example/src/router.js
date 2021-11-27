import { Router as Wouter, Route, Switch } from 'wouter';

import { Index } from './components/Index';
import { Basic } from './components/Basic';
import { LazyApi } from './components/LazyApi';
import { Terms } from './components/Terms';
import { License } from './components/License';
import { Bots } from './components/Bots';
import { NotFound } from './components/NotFound';

export default function Router() {
    return <Wouter>
        <Switch>
            <Route path="/" component={Index} />
            <Route path="/basic" component={Basic} />
            <Route path="/lazyapi" component={LazyApi} />
            <Route path="/terms" component={Terms} />
            <Route path="/license" component={License} />
            <Route path="/bots" component={Bots} />

            <Route component={NotFound} />
        </Switch>
    </Wouter>
};
