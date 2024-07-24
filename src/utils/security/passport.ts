import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtSecret } from "../../config";
import { IAccessToken } from "../../interfaces/auth.interface";
import { Unauthorized } from "../../models/error.model";

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
    },
    async (payload, done) => {
      try {
        console.log(payload as IAccessToken);
        return done(null, payload);
      } catch (error) {
        done(error, null, {
          message: new Unauthorized().message,
        });
      }
    }
  )
);
