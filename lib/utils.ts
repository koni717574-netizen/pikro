export function cn(...inputs:(string|undefined|false|null)[]){return inputs.filter(Boolean).join(' ')}
export function formatPrice(rial:number):string{return Math.round(rial/10).toLocaleString('fa-IR')+' تومان'}
export function faNum(n:number):string{return n.toLocaleString('fa-IR')}
export function formatDistance(km:number):string{return km<1?Math.round(km*1000)+' متر':km.toFixed(1)+' کیلومتر'}
export function formatDuration(min:number):string{return min<60?faNum(min)+' دقیقه':faNum(Math.floor(min/60))+' ساعت '+faNum(min%60)+' دقیقه'}
export const ORDER_STATUS:Record<string,string>={pending:'در انتظار',searching:'در حال جستجو',accepted:'پذیرفته شده',picked_up:'تحویل گرفته شد',in_transit:'در مسیر',delivered:'تحویل داده شد',cancelled:'لغو شده'}
export const PACKAGE_LABELS:Record<string,string>={document:'📄 اسناد',food:'🍕 غذا',medicine:'💊 دارو',small_goods:'📦 کالای کوچک',other:'📦 سایر'}
export const PACKAGE_TYPES=['document','food','medicine','small_goods','other']
export const VEHICLE_LABELS:Record<string,string>={walk:'🚶 پیاده',bike:'🚲 دوچرخه'}