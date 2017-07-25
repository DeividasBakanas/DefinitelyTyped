// Type definitions for passport-discord 0.1
// Project: https://github.com/nicholastay/passport-discord#readme
// Definitions by: Gonthier Renaud <https://github.com/kzay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/** Declaration file generated by dts-gen */

import * as passport from 'passport';
import * as express from 'express';

export class Strategy implements passport.Strategy {
    constructor(options: Strategy.StrategyOption, verify: (accessToken: string, refreshToken: string, profile: Strategy.Profile, done: (error: any, user?: any) => void) => void);
    name: string;
    authenticate: (req: express.Request, options?: object) => void;

    authorizationParams(options: any): any;

    checkScope(scope: any, accessToken: any, cb: any): any;

    parseErrorResponse(body: any, status: any): any;

    tokenParams(options: any): any;

    userProfile(accessToken: any, done: any): any;
}

export namespace Strategy {
    interface StrategyOption {
        clientID: string;
        clientSecret: string;
        callbackURL: string;
        scope?: string[];
    }

    interface Profile extends passport.Profile {
        profileUrl: string;
        id: any;
        username: string;
        discriminator: string;
        avatar: string;
        verified: boolean;
        email: string;
        _raw: any;
        _json: any;
    }
}
