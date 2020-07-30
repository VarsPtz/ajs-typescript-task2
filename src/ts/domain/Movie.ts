import Buyable from "./Buyable";

/**
 * @module user
 */

/**
 * Load user info by id
 *
 * @param {number} id user id
 * @returns {Object} user info
 */
export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly timing: number,
  ) {}
}
