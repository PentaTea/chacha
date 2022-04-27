import { Context } from "koishi";

export const name = "core";

export function apply(ctx: Context) {
  ctx.middleware((session, next) => {
    if (session.content === "天王盖地虎") {
      return "宝塔镇河妖";
    }
    return next();
  });
}
