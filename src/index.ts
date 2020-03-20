import { Linking } from 'react-native';

/**
 * 拨打电话
 */
export default function open_tel(phone_num: string): Promise<boolean> {
	return Linking.openURL(`tel:${phone_num}`);
}
